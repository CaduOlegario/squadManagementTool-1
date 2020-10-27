import React from "react";

class StringUtils {

    static getNameInitials = name =>
        name
            .split(' ')
            .filter((val, index) => index < 2)
            .map(val => val.charAt(0))
            .join('')
            .toUpperCase();

}

export default StringUtils;
