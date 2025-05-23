import React from 'react'
import {TrophySpin} from "react-loading-indicators";

const Loader = () => {
    return (
        <div className="flex justify-center">
            <TrophySpin color="#4df5fe" size="medium" text="Loading..." textColor="#2cf5ff" />
        </div>
    )
}
export default Loader
