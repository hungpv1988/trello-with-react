export function getKeyFromValue(enumType, value)
{
    if (!enumType){
        return null;
    }

    for (var key in enumType){
        if (enumType[key] == value){
            return key;
        }
    }

    return null;
}

export function getValueFromKey(enumType, key){
    if (!enumType){
        return null;
    }

    return enumType[key];
}