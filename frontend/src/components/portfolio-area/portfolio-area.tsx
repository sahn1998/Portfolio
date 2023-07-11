import React, { useState, useEffect } from "react";
import { PortfolioItem  } from "./portfolio-items/portfolio-items";
import './portfolio-area.css'

export interface Props {
    headerHeight: number
    items: string[];
}

export const PortfolioArea = ( props: Props) => {
    const [height, setHeight] = useState(window.innerHeight - props.headerHeight);
    /** useEffect hook is used to set the height
     *  if the browser window size changes
     */
    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight - props.headerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="portfolio-area" style={{
            height:height,
        }}>
            {props.items.map((item, index) => (
                <div key={index}>
                    <PortfolioItem headerHeight={props.headerHeight} height={height} item={item}/>
                </div>
            ))}
        </div>
    )
};