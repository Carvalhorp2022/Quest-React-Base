import React from "react";

function Text ({text, color}) {
    return (
        <div className="text" style={{color}}>
            {text}
        </div>
    )
}

export default Text