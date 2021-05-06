function setter(key,value)
{
    localStorage.setItem(key,JSON.stringify(value));
}

function getter(key)
{
    return JSON.parse(localStorage.getItem(key));
}

module.exports = {
    setter,
    getter
}