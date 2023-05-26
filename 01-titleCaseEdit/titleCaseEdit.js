function titleCaseEdit(title) {
    let s = title.split(" ");
    for (let i = 0; i < s.length; i++)
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    
    return s.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
