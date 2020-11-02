class StringUtils {

    static getNameInitials = name =>
        name
            .split(' ')
            .filter((val, index) => index < 2)
            .map(val => val.charAt(0))
            .join('')
            .toUpperCase();

    static validateUrl = url => {
        let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        return regEx.test(url);
    }

}

export default StringUtils;
