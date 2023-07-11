import React, { useState, useEffect } from "react";
import { Item } from "../../../types/types";
import './portfolio-items.css'
import { Link } from "react-router-dom";

export interface Props {
    headerHeight: number
    height: number
    item: string;
}

export const PortfolioItem = ( props: Props) => {
    const [item, setItem] = useState<Item>({
        item: props.item,
        x_cord: Math.floor(Math.random() * (window.innerWidth / 10)) * 10,
        y_cord: Math.floor((Math.random() * (props.height - props.headerHeight) / 10)) * 10,
        x_cord_forward: Math.round(Math.random() * 2),
        y_cord_forward: Math.round(Math.random() * 2)
    });

    useEffect(() => {
        /* update left and top values of each item by 10 every 100 miliseconds */
        const interval = setInterval(() => {
            let newX = item.x_cord;
            let newY = item.y_cord;

            /** moving right */
            if (item.x_cord_forward === 0) {
                newX += 10;
                if (newX + 10 >= window.innerWidth - 90) {
                    item.x_cord_forward = 1;
                }
            /** moving left */
            } else {
                newX -= 10;
                if (newX - 10 <= 0) {
                    item.x_cord_forward = 0;
                }
            }
            /** moving up */
            if (item.y_cord_forward === 0) {
                newY += 10;
                if (newY + 10 >= props.height - 60) {
                    item.y_cord_forward = 1;
                }
            /** moving down */
            } else {
                newY -= 10;
                if (newY - 10 <= 0) {
                    item.y_cord_forward = 0;
                }
            }
     
            setItem({
                ...item,
                x_cord: newX,
                y_cord: newY
            });
        }, 100);

        return () => clearInterval(interval);
    }, [item]);

    return (
        <div
            className="circle"
            style={{
                left: item.x_cord+"px",
                top: item.y_cord+"px"
            }}
        >
            <Link to="/aboutme" style={{
                width: 50,
                height: 50,
                borderRadius: 50+"%"
            }}>
            </Link>
        </div>
    )
};