"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Button } from "@/components/ui/button"
import * as THREE from 'three'

interface PillarProps {
  title: string
  description: string
  geometry: "DoubleHelix" | "Network" | "Cell" | "DialogSpheres"
  color: string
}

interface ShapeProps {
  geometry: PillarProps["geometry"]
  color: string
  isHovered: boolean
}

const pillars: PillarProps[] = [
  {
    title: "Interdisciplinary Community",
    description: "Bringing together minds from biology, computer science, and beyond",
    geometry: "Network",
    color: "#10B981",
  },
  {
    title: "Research Projects",
    description: "Pushing boundaries through innovative research initiatives",
    geometry: "DoubleHelix",
    color: "#059669",
  },
  {
    title: "Accessible Biotech",
    description: "Making biotechnology knowledge available to all",
    geometry: "Cell",
    color: "#047857",
  },
  {
    title: "Ethics & Discourse",
    description: "Fostering meaningful discussions about biotech's impact",
    geometry: "DialogSpheres",
    color: "#065F46",
  },
]

function createDoubleHelix(radius: number, height: number, turns: number) {
  const points1: THREE.Vector3[] = []
  const points2: THREE.Vector3[] = []
  const segments = turns * 32

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2 * turns
    const z = (i / segments) * height - height / 2
    
    points1.push(new THREE.Vector3(
      radius * Math.cos(t),
      radius * Math.sin(t),
      z
    ))
    
    points2.push(new THREE.Vector3(
      radius * Math.cos(t + Math.PI),
      radius * Math.sin(t + Math.PI),
      z
    ))
  }

  return { points1, points2 }
}

function createNetworkGeometry() {
  const vertices: number[] = []
  const nodeCount = 16
  const radius = 1.5

  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount)
    const theta = Math.sqrt(nodeCount * Math.PI) * phi

    vertices.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    )
  }

  return vertices
}

function Shape({ geometry, color, isHovered }: ShapeProps) {
  const scale = isHovered ? 1.2 : 1
  
  switch (geometry) {
    case "DoubleHelix": {
      const { points1, points2 } = createDoubleHelix(0.8, 4, 2.5)
      return (
        <group scale={scale}>
          <line>
            <bufferGeometry>
              <float32BufferAttribute 
                attach="attributes-position" 
                args={[Float32Array.from(points1.flatMap(p => [p.x, p.y, p.z])), 3]} 
              />
            </bufferGeometry>
            <lineBasicMaterial color={color} linewidth={3} />
          </line>
          <line>
            <bufferGeometry>
              <float32BufferAttribute 
                attach="attributes-position" 
                args={[Float32Array.from(points2.flatMap(p => [p.x, p.y, p.z])), 3]} 
              />
            </bufferGeometry>
            <lineBasicMaterial color={color} linewidth={3} />
          </line>
          {points1.map((_, i) => (
            i % 4 === 0 && (
              <line key={i}>
                <bufferGeometry>
                  <float32BufferAttribute 
                    attach="attributes-position" 
                    args={[Float32Array.from([
                      points1[i].x, points1[i].y, points1[i].z,
                      points2[i].x, points2[i].y, points2[i].z
                    ]), 3]} 
                  />
                </bufferGeometry>
                <lineBasicMaterial color={color} linewidth={2} />
              </line>
            )
          ))}
        </group>
      )
    }
    case "Network": {
      const vertices = createNetworkGeometry()
      return (
        <group scale={scale}>
          <points>
            <bufferGeometry>
              <float32BufferAttribute 
                attach="attributes-position" 
                args={[Float32Array.from(vertices), 3]} 
              />
            </bufferGeometry>
            <pointsMaterial 
              size={0.25}
              color={color} 
              sizeAttenuation 
            />
          </points>
          {[...Array(24)].map((_, i) => {
            const randomPoints = [
              Math.random() * 3 - 1.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5
            ]
            return (
              <line key={i}>
                <bufferGeometry>
                  <float32BufferAttribute 
                    attach="attributes-position" 
                    args={[Float32Array.from(randomPoints), 3]} 
                  />
                </bufferGeometry>
                <lineBasicMaterial color={color} transparent opacity={0.3} />
              </line>
            )
          })}
        </group>
      )
    }
    case "Cell": {
      return (
        <group scale={scale}>
          <mesh>
            <sphereGeometry args={[1.4, 64, 64]} />
            <meshStandardMaterial 
              color={color} 
              transparent={true} 
              opacity={0.05}
              roughness={0.1}
              metalness={0.2}
            />
          </mesh>
          
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.01, 32, 100]} />
            <meshStandardMaterial color={color} transparent opacity={0.2} />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1, 0.01, 32, 100]} />
            <meshStandardMaterial color={color} transparent opacity={0.2} />
          </mesh>

          <mesh>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial 
              color={color}
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>

          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8
            const radius = 0.75
            return (
              <group key={i}>
                <mesh 
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    0
                  ]}
                >
                  <sphereGeometry args={[0.05, 16, 16]} />
                  <meshStandardMaterial 
                    color={color}
                    transparent
                    opacity={0.5}
                    roughness={0.2}
                  />
                </mesh>
                <line>
                  <bufferGeometry>
                    <float32BufferAttribute 
                      attach="attributes-position" 
                      args={[Float32Array.from([
                        Math.cos(angle) * radius, Math.sin(angle) * radius, 0,
                        Math.cos(angle) * 0.25, Math.sin(angle) * 0.25, 0
                      ]), 3]} 
                    />
                  </bufferGeometry>
                  <lineBasicMaterial color={color} transparent opacity={0.15} />
                </line>
              </group>
            )
          })}
        </group>
      )
    }
    case "DialogSpheres": {
      return (
        <group scale={scale} rotation={[-0.2, 0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.2, 0.015, 32, 100]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.15}
              roughness={0.1}
            />
          </mesh>

          {[...Array(6)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 6
            const radius = 1.2
            const phase = i * Math.PI / 3
            return (
              <group key={i}>
                <mesh
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(phase) * 0.15,
                    Math.sin(angle) * radius * 0.3
                  ]}
                >
                  <sphereGeometry args={[0.08, 32, 32]} />
                  <meshStandardMaterial 
                    color={color}
                    roughness={0.2}
                    metalness={0.1}
                  />
                </mesh>

                {[1, 2].map((offset) => {
                  const nextIndex = (i + offset) % 6
                  const nextAngle = (nextIndex * Math.PI * 2) / 6
                  const nextPhase = nextIndex * Math.PI / 3
                  return (
                    <line key={`${i}-${offset}`}>
                      <bufferGeometry>
                        <float32BufferAttribute 
                          attach="attributes-position" 
                          args={[Float32Array.from([
                            Math.cos(angle) * radius,
                            Math.sin(phase) * 0.15,
                            Math.sin(angle) * radius * 0.3,
                            Math.cos(nextAngle) * radius,
                            Math.sin(nextPhase) * 0.15,
                            Math.sin(nextAngle) * radius * 0.3
                          ]), 3]} 
                        />
                      </bufferGeometry>
                      <lineBasicMaterial 
                        color={color} 
                        transparent 
                        opacity={0.1} 
                      />
                    </line>
                  )
                })}

                <mesh
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(phase) * 0.15,
                    Math.sin(angle) * radius * 0.3
                  ]}
                  rotation={[Math.PI / 2 - Math.PI * 0.1, 0, angle]}
                >
                  <ringGeometry args={[0.11, 0.12, 32]} />
                  <meshStandardMaterial 
                    color={color} 
                    transparent 
                    opacity={0.08}
                  />
                </mesh>
              </group>
            )
          })}

          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial 
              color={color}
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>
          
          <mesh rotation={[Math.PI / 2 - Math.PI * 0.1, 0, 0]}>
            <ringGeometry args={[0.14, 0.15, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.15}
            />
          </mesh>

          <mesh rotation={[0, 0, 0]}>
            <ringGeometry args={[1.2, 1.215, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.1}
            />
          </mesh>
          <mesh rotation={[0, Math.PI / 3, 0]}>
            <ringGeometry args={[1.2, 1.215, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={0.1}
            />
          </mesh>
        </group>
      )
    }
    default:
      return null
  }
}

function PillarCanvas({ geometry, color, isHovered }: ShapeProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Float
          speed={2}
          rotationIntensity={isHovered ? 2 : 1}
          floatIntensity={isHovered ? 2 : 1}
        >
          <Shape geometry={geometry} color={color} isHovered={isHovered} />
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default function CorePillars() {
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <section id="core-pillars" className="py-12 bg-white mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking-wide text-emerald-900">
            Core<span className="ml-3">Pillars</span>
          </h2>
          <p className="text-lg md:text-xl text-emerald-800/80 max-w-2xl mx-auto font-plus-jakarta">
            The foundational elements that drive our mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="h-48 mb-6">
                <PillarCanvas
                  geometry={pillar.geometry}
                  color={pillar.color}
                  isHovered={hoveredIndex === index}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-plus-jakarta tracking-wide text-emerald-900">
                {pillar.title}
              </h3>
              <p className="text-emerald-800/70 mb-4">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
