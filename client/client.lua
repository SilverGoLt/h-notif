function hnotif(icon, type, text, pos, duration)
    SendNuiMessage(json.encode({
        type = type,
        icon = icon,
        text = text,
        pos = pos,
        duration = duration
}))
end

RegisterNetEvent("H-Notif:SendNotification")
AddEventHandler("H-Notif:SendNotification", function(icon, type, text, pos, duration)
       hnotif(icon, type, text, pos, duration)
end)

exports('send', hnotif)
