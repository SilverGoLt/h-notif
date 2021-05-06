function main(){
    var not = new Audio('not.mp4')
    return{
        succ: false,
        stext: 'empty',
        etext: 'empty',
        itext: 'empty',
        pos1: 'justify-center',
        pos2: 'items-start',
        err: false,
        inf: false,
        icon: 'fas fa-check',
        d: 0,
        listen(){
            window.addEventListener('message', (event) =>{
                const item = event.data
                console.log(item.icon)
                if(item.type == 'success'){
                    if(item.pos == 'top-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'top-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'top-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'mid-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'mid-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'bot-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-end'
                    }
                    console.log(JSON.stringify(item))
                    this.succ = true
                    this.icon = item.icon
                    this.stext = item.text
                    this.d = item.duration
                    console.log(this.d)
                    not.play()
                    setTimeout(() =>{
                        this.succ = false
                    }, this.d)
                }
                if(item.type == 'error'){
                    if(item.pos == 'top-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-end'
                    }
                    if(item.pos == 'top-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'top-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'mid-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'mid-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'bot-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-end'
                    }
                    this.err = true
                    this.icon = item.icon
                    this.etext = item.text
                    not.play()
                    setTimeout(() =>{
                        this.err = false
                    }, item.duration)
                }
                if(item.type == 'info'){
                    if(item.pos == 'top-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-end'
                    }
                    if(item.pos == 'top-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'top-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-start'
                    }
                    if(item.pos == 'mid-left'){
                        this.pos1 = 'justify-start'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'mid-right'){
                        this.pos1 = 'justify-end'
                        this.pos2 = 'items-center'
                    }
                    if(item.pos == 'bot-center'){
                        this.pos1 = 'justify-center'
                        this.pos2 = 'items-end'
                    }
                    this.inf = true
                    this.icon = item.icon
                    this.itext = item.text
                    not.play()
                    setTimeout(() =>{
                        this.inf = false
                    }, item.duration)
                }
            })
        }
    }
}