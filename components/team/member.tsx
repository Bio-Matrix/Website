import React from "react";

type MemberProps = {
    src: string;
    alt?: string;
    name: string;
    project?: string;
    studyProgram?: string;
    className?: string;
    width?: number | string;
};

const emerald = "#064e3b";      // emerald-900
const emeraldLight = "#0d8b6e"; // optional accent

const Member: React.FC<MemberProps> = ({
    src,
    alt = "",
    name,
    project = "",
    studyProgram = "",
    className,
    width = 240,
}) => {
    const containerStyle: React.CSSProperties = {
        width,
        maxWidth: "100%",
        backgroundColor: emerald,
        borderRadius: 12,
        overflow: "hidden",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        marginLeft: 8,
        marginRight: 8
    };

    const imageWrapperStyle: React.CSSProperties = {
        width: "100%",
        aspectRatio: "3 / 3",
        overflow: "hidden",
        backgroundColor: emerald,
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        opacity: 0.92, // weicher Übergang zum Emerald
    };

    const captionStyle: React.CSSProperties = {
        marginTop: 10,
        textAlign: "center",
        paddingBottom: 16,
    };

    return (
        <div className={className} style={containerStyle}>
            <figure style={{ margin: 0 }}>
                <div style={imageWrapperStyle}>
                    <img src={src} alt={alt} style={imgStyle} />
                </div>
                <figcaption style={captionStyle}>
                    <p style={{ margin: 0, fontWeight: 600, color: "white", fontSize: 18 }}>
                        {name}
                    </p>
                    <p style={{ margin: "4px 0 0 0", color: emeraldLight, fontWeight: 500 }}>
                        {project}
                    </p>
                    <p style={{ margin: "2px 0 0 0", color: "#d1d5db", fontSize: 13 }}>
                        {studyProgram}
                    </p>
                </figcaption>
            </figure>
        </div>
    );
};

export default Member;