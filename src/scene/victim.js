import SceneObject from './base/scene-object';



class Target extends SceneObject {


    init(){


        this.width = 64;
        this.height = 64;

        this.position.x = (this.scene.width / 2) - (this.width / 2);
        this.position.y = 128;

    }

    update(){
        
    }


    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "#ffaa00";
        ctx.rect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();

    }


}


export default Target;