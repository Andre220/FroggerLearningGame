function mySprite(file, sx, sy, sw, sh, x, y, w, h, frames, fps)
{
    console.log("kjbkjkjb");

        this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
        this.x = x;
        this.y = y;
        
        this.scale_x = 1;
        this.scale_y = 1;
        
        this.sw = sw;
        this.sh = sh;
        
        this.w = w;
        this.h = h;
        
        this.sx = 0;
        this.sy = 0;
        
        this.current_frame = 0;
        
        this.frames = frames;
        
        this.fps = fps;

        this.animate = true;

        if(this.fps >= 1)
        {
            this.time_per_frame = 1000/this.fps;
        }
        else
        {
            this.animate = false;
        }

        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 1000/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0;
        
        this.acumulated_delta_time = 0
        
        this.last_draw_time = 0;
        
        this.Update = function()
        {//abre update
                
        }//fecha update
        
        this.Draw = function()//funcao desenhar (draw)
        {//abre draw
                
                //console.log("oioio");
                
                if(this.visible)
                screen.drawImage(this.img,
                                 this.sw*this.current_frame,
                                 this.sy,
                                 this.sw,
                                 this.sh,
                                 this.x,
                                 this.y,
                                 this.w*this.scale_x,
                                 this.h*this.scale_y);
            
                 if(this.animate)
                 {                       
                    this.delta_time = Date.now() - this.last_draw_time;
                    
                    if(this.acumulated_delta_time > this.time_per_frame)
                    {//abre if
                            
                            this.acumulated_delta_time = 0;
                            this.current_frame++;
                            if(this.current_frame >= this.frames)
                            {//abre if
                            
                                    this.current_frame = 0;
                                    
                            }//fecha if
                            
                    }//fecha if
                    else
                    {//abre else
                    
                            this.acumulated_delta_time += this.delta_time;
                            
                    }//fecha if
                    
                    this.last_draw_time = Date.now();
                }
                
        }//fecha draw
        
}//fecha 