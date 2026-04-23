const egghead = function(p) {
    p.disableFriendlyErrors = true;
    let headsetModel;
    let tagLogoImg;
    let irisImage;
    let leftIrisGeo;
    let rightIrisGeo;
    let tagLogoGeo;

    p.setup = async function() {
        let headsetCanvas = p.createCanvas(240, 240, p.WEBGL);
        headsetCanvas.parent("#egghead-headset");
        headsetCanvas.canvas.id = "egghead-headset-sketch";
        
        headsetModel = await p.loadModel("../assets/sketches/vr-headset.obj", ".obj", true);
        irisImage = await p.loadImage("../assets/sketches/iris.png");
        tagLogoImg = await p.loadImage("../assets/sketches/JM-tag-logo.png");
        
        leftIrisGeo = p.buildGeometry(p.drawLeftIris);
        leftIrisGeo.flipU();

        rightIrisGeo = p.buildGeometry(p.drawRightIris);
        rightIrisGeo.flipU();

        tagLogoGeo = p.buildGeometry(p.drawLogo);
        tagLogoGeo.flipU();

        p.angleMode(p.DEGREES);
        p.frameRate(30);

        p.describe("An egghead wearing a VR headset looking in the direction the mouse.");
    }

    p.draw = function() {
        p.background("transparent");

        p.ambientLight(253, 248, 232);
        p.directionalLight(127, 178, 214, -1, -0.5, -0.5);
        p.directionalLight(76, 101, 119, 1, 0.75, 1);

        p.rotateY(clampNum((p.mouseX / p.width * 30 - 15), -15, 15) - 90);
        p.rotateZ(clampNum((p.mouseY / p.height * 30 - 15), -15, 15) + 12);
        
        p.noStroke();
        
        p.model(headsetModel);

        p.push();

        p.texture(irisImage);
        p.model(leftIrisGeo);
        p.model(rightIrisGeo);

        p.pop();

        p.push();

        p.texture(tagLogoImg);
        p.model(tagLogoGeo);

        p.pop();
    }

    p.drawLeftIris = function() {
        p.beginShape();

        let irisFaces = headsetModel.faces.slice(1047, 1056);
        let irisFace = [...new Set(irisFaces.flat())];

        for (let vert of irisFace) {
            let v = headsetModel.vertices[vert];
            let uv = headsetModel.uvs[vert];
            p.vertex(v.x+1, v.y, v.z, uv[0], uv[1]);
        }

        p.endShape();
    }

    p.drawRightIris = function() {
        p.beginShape();

        irisFaces = headsetModel.faces.slice(1056, 1066);
        irisFace = [...new Set(irisFaces.flat())];
        for (let vert of irisFace) {
            let v = headsetModel.vertices[vert];
            let uv = headsetModel.uvs[vert];
            p.vertex(v.x+1, v.y, v.z, uv[0], uv[1]);
        }

        p.endShape();
    }

    p.drawLogo = function() {
        p.beginShape();

        let logoFaces = headsetModel.faces.slice(1067, 1070);
        let logoFace = [...new Set(logoFaces.flat())];

        for (let vert of logoFace) {
            let v = headsetModel.vertices[vert];
            let uv = headsetModel.uvs[vert];
            p.vertex(v.x+1, v.y, v.z, uv[0], uv[1]);
        }

        p.endShape();
    }
}

function clampNum(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

const rubiks = function(p) {
    p.disableFriendlyErrors = true;
    let rubiksModel;
    let logoImage;
    let logoGeo;
    let rotation = 0;

    p.setup = async function() {
        rubiksCanvas = p.createCanvas(240, 240, p.WEBGL);
        rubiksCanvas.parent("#rubiks-cube");
        rubiksCanvas.canvas.id = "rubiks-cube-sketch";
        
        rubiksModel = await p.loadModel("../assets/sketches/rubiks.obj", ".obj", true);
        logoImage = await p.loadImage("../assets/sketches/rubiks-white-logo.png");

        logoGeo = p.buildGeometry(p.drawLogo);
        logoGeo.flipV();

        p.angleMode(p.DEGREES);
        p.describe("A Rubik's Cube spinning in space.");
        p.frameRate(60);
    }

    p.draw = function() {
        p.background("transparent");
        rotation = (p.frameCount * .5) % 360;

        p.rotateY(-rotation);
        p.ambientLight(253, 248, 232);
        p.directionalLight(127, 178, 214, -1, -0.75, -1);
        p.directionalLight(76, 101, 119, 1, 0.75, 1);

        p.scale(.65);
        p.rotateY(rotation*2);
        p.rotateX(145);
        p.rotateZ(45);
        
        p.noStroke();
        
        p.model(rubiksModel);

        p.push();

        p.texture(logoImage);
        p.model(logoGeo);

        p.pop();
    }

    p.drawLogo = function() {
        p.beginShape();

        let logoFaces = rubiksModel.faces.slice((rubiksModel.faces.length-2), rubiksModel.length);
        let logoFace = [...new Set([...logoFaces[0], ...logoFaces[1]])];
        
        for (let vert of logoFace) {
            let v = rubiksModel.vertices[vert];
            let uv = rubiksModel.uvs[vert];
            p.vertex(v.x, v.y, v.z, uv[0], uv[1]);
        }

        p.endShape();
    }

}

const eggheadSketch = new p5(egghead);
const rubiksSketch = new p5(rubiks);