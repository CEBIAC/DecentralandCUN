import { NPC } from "@dcl/npc-scene-utils";
import { Dialog } from "@dcl/npc-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";
import * as utils from "@dcl/ecs-scene-utils";

export let Eva = new NPC(
  {
    position: new Vector3(9, 0.001, 24),
    rotation: new Quaternion(0, -10, 0, 3),
    scale: new Vector3(0.7, 0.7, 0.7),
  },
  "models/EVA.glb",
  () => {
    Eva.talk(EvaDialogo, 0);
  },

  {
    idleAnim: `Weight_Shift`,
    faceUser: true,
    portrait: { path: "models/foto.png", height: 128, width: 128 },
    darkUI: true,
    coolDownDuration: 3,
    hoverText: "CHAT",
    onlyClickTrigger: true,
    onlyExternalTrigger: false,
    reactDistance: 4,
    continueOnWalkAway: true,
    onWalkAway: () => {
      log("walked away");
    },
  }
);

export let EvaDialogo: Dialog[] = [
  {
    text: `¡Proximamente podrás explorar un <color="green><b>mundo virtual</b></color>  sin límites en un nuevo espacio que tenemos para ti en el <color="green"><b>Metaverso</b></color=>!`,
  },
  {
    text: "¡Sumérgete en un lugar innovador y único que hemos creado para ti!",
  },
  {
    text: "En el primer piso, encontrarás un espectacular centro de eventos, el lugar perfecto para reunirse con amigos y disfrutar de una amplia variedad de actividades interactivas.",
    isEndOfDialog: true,
  },
];

export function createCube(pos: Vector3, label: string, sphere?: boolean) {
  const cube = new Entity();
  cube.addComponent(
    new Transform({
      position: pos,
    })
  );
  if (sphere === true) {
    cube.addComponent(new SphereShape());
    cube.getComponent(Transform).scale.setAll(0.5);
  } else {
    cube.addComponent(new BoxShape());
  }

  engine.addEntity(cube);

  return cube;
}
//TARIMA
const tarima = new Entity();
tarima.addComponent(new CylinderShape());
tarima.addComponent(
  new Transform({
    position: new Vector3(7.6, 8, 25.4),
    rotation: new Quaternion(1, 0, 1, 0),
    scale: new Vector3(1.4, 0.1, 1.4),
  })
);
engine.addEntity(tarima);

//POSTERS

//POSTER PRINCIPAL
const posterPrincipal = new Entity();
const texturaPoster = new Texture("posters/posterPrincipal.jpg");
const myPoster = new BasicMaterial();
myPoster.texture = texturaPoster;
posterPrincipal.addComponent(new PlaneShape());
posterPrincipal.addComponent(
  new Transform({
    position: new Vector3(0.7, 9.1, 9.7),
    rotation: new Quaternion(1, 0, 1, 0),
    scale: new Vector3(5, 10, 1),
  })
),
  posterPrincipal.addComponent(myPoster);
engine.addEntity(posterPrincipal);

//POSTER CINNCREA
const posterCinncrea = new Entity();
const texturaPoster2 = new Texture("posters/posterCinncrea.jpg");
const myPoster2 = new BasicMaterial();
myPoster2.texture = texturaPoster2;
posterCinncrea.addComponent(new PlaneShape());
posterCinncrea.addComponent(
  new Transform({
    position: new Vector3(13, 1.8, 29),
    rotation: new Quaternion(1, 0, 1, 0),
    scale: new Vector3(1.3, 2.6, 1),
  })
),
  posterCinncrea.addComponent(myPoster2);
engine.addEntity(posterCinncrea);

//POSTER BANG
const posterBang = new Entity();
const texturaPoster3 = new Texture("posters/PosterBang.jpg");
const myPoster3 = new BasicMaterial();
myPoster3.texture = texturaPoster3;
posterBang.addComponent(new PlaneShape());
posterBang.addComponent(
  new Transform({
    position: new Vector3(4, 10.4, 6.3),
    rotation: new Quaternion(0, 0, 1, 0),
    scale: new Vector3(2, 2.2, 1.8),
  })
),
  posterBang.addComponent(myPoster3);
engine.addEntity(posterBang);

//POSTER BANG
const posterSapiolab = new Entity();
const texturaPoster4 = new Texture("posters/PosterSapiolab.jpg");
const myPoster4 = new BasicMaterial();
myPoster4.texture = texturaPoster4;
posterSapiolab.addComponent(new PlaneShape());
posterSapiolab.addComponent(
  new Transform({
    position: new Vector3(11.1, 10.4, 6.3),
    rotation: new Quaternion(0, 0, 1, 0),
    scale: new Vector3(2, 2.2, 1.8),
  })
),
  posterSapiolab.addComponent(myPoster4);
engine.addEntity(posterSapiolab);

//NFT Nicolle
const NicolleNFT = new Entity();
const NFT1 = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094191112931770369",
  { color: Color3.Blue() }
);
NicolleNFT.addComponent(NFT1);
NicolleNFT.addComponent(
  new Transform({
    position: new Vector3(9.15, 3.65, 18.9),
    rotation: new Quaternion(0, 1, 0),
    scale: new Vector3(4, 4, 1),
  })
);
NicolleNFT.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094191112931770369",
      "Pieza artística creada desde C-inncrea."
    );
  })
);
engine.addEntity(NicolleNFT);

//NFT Maria
const MariaNFT = new Entity();
const NFT2 = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094186714885259274",
  { color: Color3.Blue() }
);
MariaNFT.addComponent(NFT2);
MariaNFT.addComponent(
  new Transform({
    position: new Vector3(7, 3.65, 17.3),
    rotation: new Quaternion(0, 360, 0),
    scale: new Vector3(4, 4, 1),
  })
);
MariaNFT.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094186714885259274",
      "Pieza artística creada desde C-inncrea."
    );
  })
);
engine.addEntity(MariaNFT);

//NFT Laura
const LauraNFT = new Entity();
const NFT3 = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094190013420142593",
  { color: Color3.Blue() }
);
LauraNFT.addComponent(NFT3);
LauraNFT.addComponent(
  new Transform({
    position: new Vector3(7, 3.65, 16.8),
    rotation: new Quaternion(0, 0, 0),
    scale: new Vector3(4, 4, 1),
  })
);
LauraNFT.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094190013420142593",
      "Pieza artística creada desde C-inncrea."
    );
  })
);
engine.addEntity(LauraNFT);

//NFT Laura
const JavierNFT = new Entity();
const NFT4 = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094188913908514817",
  { color: Color3.Blue() }
);
JavierNFT.addComponent(NFT4);
JavierNFT.addComponent(
  new Transform({
    position: new Vector3(9.15, 3.65, 13.5),
    rotation: new Quaternion(0, 1, 0),
    scale: new Vector3(4, 4, 1),
  })
);
JavierNFT.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094188913908514817",
      "Pieza artística creada desde C-inncrea."
    );
  })
);
engine.addEntity(JavierNFT);

//NFT Javier
const SantiagoNFT = new Entity();
const NFT5 = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094187814396887050",
  { color: Color3.Blue() }
);
SantiagoNFT.addComponent(NFT5);
SantiagoNFT.addComponent(
  new Transform({
    position: new Vector3(7, 3.65, 9.8),
    rotation: new Quaternion(0, 360, 0),
    scale: new Vector3(4, 4, 1),
  })
);
SantiagoNFT.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/42185734286181403191372707636980316969771009591214703246197094187814396887050",
      "Pieza artística creada desde C-inncrea."
    );
  })
);
engine.addEntity(SantiagoNFT);
// // Prueba transparencia
// const transparencia = new Material();
// transparencia.albedoColor = new Color4(0, 0.5, 0, 0.5);
// const box = new BoxShape();
// //Pared1
// let myEntity = new Entity();
// myEntity.addComponent(box);
// myEntity.addComponent(
//   new Transform({
//     position: new Vector3(7.6, 3.8, 2.8),
//     scale: new Vector3(9.9, 6, 0.1),
//   })
// );

//TELEVISOR SEGUNDO PISO
const myVideoClip = new VideoClip(
  "https://bafybeihdrrymugozltrblebs6jqxx2yayyxirpxxrkwg4vinixtej5sspq.ipfs.w3s.link/y2mate.com%20-%20Estudia%20una%20carrera%20universitaria%20en%20la%20CUN_480p.mp4"
);

// // #2
const myVideoTexture = new VideoTexture(myVideoClip);

// // #3
const myMaterial = new Material();
myMaterial.albedoTexture = myVideoTexture;
myMaterial.roughness = 1;
myMaterial.specularIntensity = 0;
myMaterial.metallic = 0;

// // #4
const screen = new Entity();
screen.addComponent(new PlaneShape());
screen.addComponent(
  new Transform({
    position: new Vector3(7.8, 10.3, 29.5),
    rotation: new Quaternion(0, 8, 0, 0),
    scale: new Vector3(9, 4.5, 10),
  })
);
screen.addComponent(myMaterial);
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing;
  })
);
engine.addEntity(screen);

// myVideoTexture.play();
myVideoTexture.loop = true;

//Ediificio CUN
const edificio = new Entity();
edificio.addComponent(new GLTFShape("models/EdificioFinal.glb"));
edificio.addComponent(
  new Transform({
    position: new Vector3(6.8, 0, 18.7),
    rotation: new Quaternion(0, -3.2, 0, 3.2),
    scale: new Vector3(0.9, 0.8, 0.94),
  })
),
  engine.addEntity(edificio);

//TUBO SAPIOLAB
const sapiolab = new Entity();
sapiolab.addComponent(new GLTFShape("models/props/sapiolab.glb"));
sapiolab.addComponent(
  new Transform({
    position: new Vector3(11, 9.4, 14.6),
    rotation: new Quaternion(0, -3.2, 0, 3.2),
    scale: new Vector3(0.5, 0.5, 0.5),
  })
),
  sapiolab.addComponent(new Billboard());
engine.addEntity(sapiolab);

//TUBO CAJABANG
const cajabang = new Entity();
cajabang.addComponent(new GLTFShape("models/props/cajabang.glb"));
cajabang.addComponent(
  new Transform({
    position: new Vector3(11, 9.5, 10.4),
    rotation: new Quaternion(0, -3.2, 0, 3.2),
    scale: new Vector3(0.3, 0.3, 0.3),
  })
),
  cajabang.addComponent(new Billboard());
engine.addEntity(cajabang);

//TUBO INNOVAFEST
const innovafest = new Entity();
innovafest.addComponent(new GLTFShape("models/props/innovaEmision.glb"));
innovafest.addComponent(
  new Transform({
    position: new Vector3(4.5, 9.5, 10.4),
    rotation: new Quaternion(0, 3.2, 0, 3.2),
    scale: new Vector3(0.3, 0.3, 0.3),
  })
),
  innovafest.addComponent(new Billboard());
engine.addEntity(innovafest);

//TUBO SINCERO
const csincero = new Entity();
csincero.addComponent(new GLTFShape("models/props/csincero.glb"));
csincero.addComponent(
  new Transform({
    position: new Vector3(4.6, 9.5, 14.6),
    rotation: new Quaternion(0, 3.2, 0, 3.2),
    scale: new Vector3(0.3, 0.3, 0.3),
  })
),
  csincero.addComponent(new Billboard());
engine.addEntity(csincero);

//Teleport del Primer a Segundo piso
const tp = new Entity();
tp.addComponent(new BoxShape());

tp.addComponent(
  new Transform({
    position: new Vector3(9.3, 3, 28.9),
    scale: new Vector3(0, 0, 0),
  })
);
let triggerBox = new utils.TriggerBoxShape();
tp.addComponent(
  new utils.TriggerComponent(
    triggerBox, //shape
    {
      onCameraEnter: () => {
        log("triggered!");
        tp.addComponent(
          new utils.Delay(500, () => {
            movePlayerTo({ x: 7.5, y: 12, z: 4 }, { x: 8, y: 15, z: 13 });
          })
        );
      },

      // enableDebug: true,
    }
  )
);
engine.addEntity(tp);

//Flecha subir
const flechaSubir = new Entity();
flechaSubir.addComponent(new GLTFShape("models/props/Arrow.glb"));
flechaSubir.addComponent(
  new Transform({
    position: new Vector3(9.3, 2, 28.9),
    rotation: new Quaternion(
      -0.70710688829422,
      -1.1063546168088578e-7,
      -0.7071067094802856,
      2.6341773207150254e-8
    ),
    scale: new Vector3(1.5, 1.5, 0),
  })
),
  engine.addEntity(flechaSubir);

const flechaSubir2 = new Entity();
flechaSubir2.addComponent(new GLTFShape("models/props/Arrow.glb"));
flechaSubir2.addComponent(
  new Transform({
    position: new Vector3(11.1, 9, 4.1),
    rotation: new Quaternion(
      -0.70710688829422,
      -1.1063546168088578e-7,
      -0.7071067094802856,
      2.6341773207150254e-8
    ),
    scale: new Vector3(1.5, 1.5, 0),
  })
),
  engine.addEntity(flechaSubir2);

const flechaBajar = new Entity();
flechaBajar.addComponent(new GLTFShape("models/props/Arrowred.glb"));
flechaBajar.addComponent(
  new Transform({
    position: new Vector3(4, 8, 4.1),
    rotation: new Quaternion(0, 1, 0),
    scale: new Vector3(1.5, 1.5, 0),
  })
),
  engine.addEntity(flechaBajar);

const flechaBajar2 = new Entity();
flechaBajar2.addComponent(new GLTFShape("models/props/Arrowred.glb"));
flechaBajar2.addComponent(
  new Transform({
    position: new Vector3(7.9, 15, 29),
    rotation: new Quaternion(0, 0, 0),
    scale: new Vector3(1.5, 1.5, 0),
  })
),
  engine.addEntity(flechaBajar2);
//Teleport del segundo piso al primero
const tp1a2 = new Entity();
tp1a2.addComponent(new BoxShape());

tp1a2.addComponent(
  new Transform({
    position: new Vector3(4, 9, 4.3),
    scale: new Vector3(0, 0, 0),
  })
);
let triggerBox2 = new utils.TriggerBoxShape();
tp1a2.addComponent(
  new utils.TriggerComponent(
    triggerBox2, //shape
    {
      onCameraEnter: () => {
        log("triggered!");
        tp1a2.addComponent(
          new utils.Delay(500, () => {
            movePlayerTo({ x: 6, y: 2, z: 21 }, { x: 19, y: 2, z: 8 });
          })
        );
      },

      // enableDebug: true,
    }
  )
);
engine.addEntity(tp1a2);

//Teleport del segundo piso al tercero
const tp2a3 = new Entity();
tp2a3.addComponent(new BoxShape());

tp2a3.addComponent(
  new Transform({
    position: new Vector3(11, 9, 4.1),
    scale: new Vector3(0, 0, 0),
  })
);
let triggerBox3 = new utils.TriggerBoxShape();
tp2a3.addComponent(
  new utils.TriggerComponent(
    triggerBox3, //shape
    {
      onCameraEnter: () => {
        log("triggered!");
        tp2a3.addComponent(
          new utils.Delay(500, () => {
            movePlayerTo({ x: 8, y: 18, z: 8 }, { x: 8, y: 18, z: 8 });
          })
        );
      },

      // enableDebug: true,
    }
  )
);
engine.addEntity(tp2a3);

//Teleport del tercero al segundo
const tp3a2 = new Entity();
tp3a2.addComponent(new BoxShape());

tp3a2.addComponent(
  new Transform({
    position: new Vector3(7.8, 16, 29),
    scale: new Vector3(0, 0, 0),
  })
);
let triggerBox4 = new utils.TriggerBoxShape();
tp3a2.addComponent(
  new utils.TriggerComponent(
    triggerBox4, //shape
    {
      onCameraEnter: () => {
        log("triggered!");
        tp3a2.addComponent(
          new utils.Delay(500, () => {
            movePlayerTo({ x: 7.5, y: 12, z: 4 }, { x: 8, y: 15, z: 13 });
          })
        );
      },

      // enableDebug: true,
    }
  )
);
engine.addEntity(tp3a2);

//Puerta principal
// const wall1 = new Entity();
// wall1.addComponent(new BoxShape());
// engine.addEntity(wall1);
// const wall2 = new Entity();
// wall2.addComponent(
//   new Transform({
//     position: new Vector3(2.25, 1, 3),
//     scale: new Vector3(1.5, 2, 0.1),
//   })
// );
// wall2.addComponent(new BoxShape());
// engine.addEntity(wall2);
// // Add the two sides to the door
// const doorL = new Entity();
// doorL.addComponent(
//   new Transform({
//     position: new Vector3(0.5, 0, 0),
//     scale: new Vector3(1.1, 2, 0.05),
//   })
// );
// doorL.addComponent(new BoxShape());
// engine.addEntity(doorL);
// const doorR = new Entity();
// doorR.addComponent(
//   new Transform({
//     position: new Vector3(-0.5, 0, 0),
//     scale: new Vector3(1.1, 2, 0.05),
//   })
// );
// doorR.addComponent(new BoxShape());
// engine.addEntity(doorR);
// // Define a material to color the door sides red
// const doorMaterial = new Material();
// doorMaterial.albedoColor = Color3.Red();
// doorMaterial.metallic = 0.9;
// doorMaterial.roughness = 0.1;
// // Assign the material to both door sides
// doorL.addComponent(doorMaterial);
// doorR.addComponent(doorMaterial);
// // Define open and closed positions for both door sides
// const doorLClosed = new Vector3(0.5, 0, 0);
// const doorLOpen = new Vector3(1.25, 0, 0);
// const doorRClosed = new Vector3(-0.5, 0, 0);
// const doorROpen = new Vector3(-1.25, 0, 0);
// // This parent entity holds the state for both door sides
// const doorParent = new Entity();
// doorParent.addComponent(
//   new Transform({
//     position: new Vector3(4, 1, 3),
//   })
// );
// //toggle behavior for doorParent
// doorParent.addComponent(
//   new utils.ToggleComponent(utils.ToggleState.Off, (value) => {
//     if (value === utils.ToggleState.On) {
//       // open doors
//       doorL.addComponentOrReplace(
//         new utils.MoveTransformComponent(doorLClosed, doorLOpen, 1)
//       );
//       doorR.addComponentOrReplace(
//         new utils.MoveTransformComponent(doorRClosed, doorROpen, 1)
//       );
//     } else {
//       // close doors
//       doorL.addComponentOrReplace(
//         new utils.MoveTransformComponent(doorLOpen, doorLClosed, 1)
//       );
//       doorR.addComponentOrReplace(
//         new utils.MoveTransformComponent(doorROpen, doorRClosed, 1)
//       );
//     }
//   })
// );

// engine.addEntity(doorParent);

// // Set the doorParent as a parent of both door sides
// doorL.setParent(doorParent);
// doorR.setParent(doorParent);

// // Set the click behavior for both door sides
// doorL.addComponent(
//   new OnPointerDown(
//     (e) => {
//       doorParent.getComponent(utils.ToggleComponent).toggle();
//     },
//     { button: ActionButton.POINTER, hoverText: "Open/Close" }
//   )
// );

// doorR.addComponent(
//   new OnPointerDown(
//     (e) => {
//       doorParent.getComponent(utils.ToggleComponent).toggle();
//     },
//     { button: ActionButton.POINTER, hoverText: "Open/Close" }
//   )
// );
