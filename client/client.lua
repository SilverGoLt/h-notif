function hnotif(icon, type, text, pos, duration)
    SendNuiMessage(json.encode({
        type = type,
        icon = icon,
        text = text,
        pos = pos,
        duration = duration
}))
end

exports('send', hnotif)