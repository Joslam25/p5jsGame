function player() {
    this.width = 100
    this.height = 100
    this.x = w/2
    this.y = h/2
    this.show = function() {
        rectMode(CENTER)
        fill(0,255,0)
        rect(this.x,this.y,this.width,this.height)
    }
    this.moving = function() {
        if (keyIsDown(87)) {
            if (player.y > h/2) {
                player.y -= 5
            }
            else {
            if (((mmap.y)-h*1.5) > -25) {
                if ((player.y) - 50 < 0 ) {

                }
                else {
                    player.y -= 5
                }
            }
            else {
                mmap.y += 5
            }
    }    
    }
    if (keyIsDown(83)) {
        if (player.y < h/2) {
            player.y += 5
        }
        else {
            if (((mmap.y)+h*1.5) < h+30) {
                if ((player.y) + 50 > h ) {

                }
                else {
                    player.y += 5
                }
            }
            else {
            mmap.y -= 5
            }
    }
    }
    if (keyIsDown(68)) {
        if (player.x < w/2) {
            player.x += 5
        }
        else {
            if (((mmap.x)+w*1.5) < w+30) {
                if ((player.x) + 50 > w ) {

                }
                else {
                    player.x += 5
                }
            }
            else {
                mmap.x -= 5
            }
    }
    }
    if (keyIsDown(65)) {
        if (player.x > w/2) {
            player.x -= 5
        }
            else {
            if (((mmap.x)-w*1.5) > -25) {
                if ((player.x) - 50 < 0 ) {

                }
                else {
                    player.x -= 5
                }
            }
            else {
            mmap.x += 5
            }
        }
    }
    }

    }
function mmap() {
    this.width = w*3
    this.height = h*3
    this.x = w/2
    this.y = h/2
    this.show = function() {
        imageMode(CENTER)
        image(mapimg,this.x,this.y,this.width,this.height)
        
    }
}
function shooterp() {
    this.width = 100
    this.height = 100
    this.show = function() {
        rectMode(CENTER)
        fill(0,255,0)
        rect(shooterx,shootery,this.width,this.height)
    }
    this.moving = function() {
        if (keyIsDown(87)) {
            shootery -= 5
        }
        if (keyIsDown(83)) {
            shootery += 5
        }
        if (keyIsDown(68)) {
            shooterx += 5
        }
        if (keyIsDown(65)) {
            shooterx -= 5
        }

    }
}
function bullet(xSpd,ySpd) {
    this.x = shooterx
    this.y = shootery


    this.update = function() {
        this.x += xSpd*10;
		this.y += ySpd*10;

    }
    this.show = function() {
		fill(255,0,0);
		ellipse(this.x, this.y, 10);
    }
}
function getMouseVector(){
	let mouseX2 = mouseX - shooterx;
	let mouseY2 = mouseY - shootery;
	let mouseDir = createVector(mouseX2, mouseY2);
	mouseDir.normalize();
	return mouseDir;
}