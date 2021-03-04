import React from "react";

export default function TodaysDate(props) {
    let day = days[props.date.getDay()];
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];

    return (
        <div>
            {day}
        </div>
    );
}