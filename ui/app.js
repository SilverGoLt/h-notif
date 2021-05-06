function main(){
    var not = new Audio('not.mp3')
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
                    this.succ = true
                    this.icon = item.icon
                    this.stext = item.text
                    this.d = item.duration
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
                    this.d = item.duration
                    not.play()
                    setTimeout(() =>{
                        this.err = false
                    }, this.d)
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
                    this.d = item.duration
                    not.play()
                    setTimeout(() =>{
                        this.inf = false
                    }, this.d)
                }
            })
        }
    }
}
