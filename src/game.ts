// Check the following files for interaction mechanics:

// events-on-entities.ts
// global-events.ts
// proximity.ts
// query-meshes.ts

// The following files contain reusable functions that help simplify these:

// scene-utils.ts
// switchMaterials.ts
// import { NPC } from "@dcl/npc-scene-utils";
// import { Dialog } from "@dcl/npc-scene-utils";

// export let Eva = new NPC(
//   {
//     position: new Vector3(6, 0.3, 16),
//     rotation: new Quaternion(1, 13.1, 0, 3),
//   },
//   "models/EVA.glb",
//   () => {
//     Eva.talk(EvaDialogo, 0);
//   },

//   {
//     idleAnim: `Weight_Shift`,
//     faceUser: true,
//     portrait: { path: "models/foto.png", height: 128, width: 128 },
//     darkUI: true,
//     coolDownDuration: 3,
//     hoverText: "CHAT",
//     onlyClickTrigger: true,
//     onlyExternalTrigger: false,
//     reactDistance: 4,
//     continueOnWalkAway: true,
//     onWalkAway: () => {
//       log("walked away");
//     },
//   }
// );

// export let EvaDialogo: Dialog[] = [
//   {
//     text: `¡Proximamente podrás explorar un <color="green><b>mundo virtual</b></color>  sin límites en un nuevo espacio que tenemos para ti en el <color="green"><b>Metaverso</b></color=>!`,
//   },
//   {
//     text: "¡Sumérgete en un lugar innovador y único que hemos creado para ti!",
//   },
//   {
//     text: "En el primer piso, encontrarás un espectacular centro de eventos, el lugar perfecto para reunirse con amigos y disfrutar de una amplia variedad de actividades interactivas.",
//     isEndOfDialog: true,
//   },
// ];

// export function createCube(pos: Vector3, label: string, sphere?: boolean) {
//   const cube = new Entity();
//   cube.addComponent(
//     new Transform({
//       position: pos,
//     })
//   );
//   if (sphere === true) {
//     cube.addComponent(new SphereShape());
//     cube.getComponent(Transform).scale.setAll(0.5);
//   } else {
//     cube.addComponent(new BoxShape());
//   }

//   engine.addEntity(cube);

//   return cube;
// }
// // #1
// const myVideoClip = new VideoClip(
//   "https://bafybeihdrrymugozltrblebs6jqxx2yayyxirpxxrkwg4vinixtej5sspq.ipfs.w3s.link/y2mate.com%20-%20Estudia%20una%20carrera%20universitaria%20en%20la%20CUN_480p.mp4"
// );

// // #2
// const myVideoTexture = new VideoTexture(myVideoClip);

// // #3
// const myMaterial = new Material();
// myMaterial.albedoTexture = myVideoTexture;
// myMaterial.roughness = 1;
// myMaterial.specularIntensity = 0;
// myMaterial.metallic = 0;

// // #4
// const screen = new Entity();
// screen.addComponent(new PlaneShape());
// screen.addComponent(
//   new Transform({
//     position: new Vector3(8, 4, 6),
//     rotation: new Quaternion(0, -2, 0, 3),
//     scale: new Vector3(10, 5, 10),
//   })
// );
// screen.addComponent(myMaterial);
// screen.addComponent(
//   new OnPointerDown(() => {
//     myVideoTexture.playing = !myVideoTexture.playing;
//   })
// );
// engine.addEntity(screen);

// // #5
// myVideoTexture.play();
// myVideoTexture.loop = true;

// Baseaaw
import { movePlayerTo } from "@decentraland/RestrictedActions";
import * as utils from "@dcl/ecs-scene-utils";
import { addElevator } from "./modules/elevator";

const base = new Entity();
base.addComponent(new GLTFShape("models/baseDarkWithCollider.glb"));
base.addComponent(new Transform({ scale: new Vector3(1, 1, 2) }));
engine.addEntity(base);

// const edificio = new Entity();
// edificio.addComponent(new GLTFShape("models/EdificioV2.glb"));
// edificio.addComponent(
//   new Transform({
//     position: new Vector3(1, 1, 1),
//   })
// );
// edificio.addComponent(new Transform({ scale: new Vector3(1, 1, 2) }));
// engine.addEntity(edificio);

// const edificio = new Entity();
// edificio.addComponent(new GLTFShape("models/EdificioV2.glb"));
// edificio.addComponent(
//   new Transform({
//     position: new Vector3(6.8, 0.3, 18.7),
//     rotation: new Quaternion(0, -3.2, 0, 3.2),
//     scale: new Vector3(0.9, 0.8, 0.94),
//   })
// ),
//   engine.addEntity(edificio);

const teleport = new Entity();
teleport.addComponent(new BoxShape());
teleport.addComponent(new Transform({ position: new Vector3(1, 0, 8) }));
teleport.addComponent(
  new OnPointerHoverEnter((e) => {
    movePlayerTo({ x: 5, y: 25, z: 24 }, { x: 10, y: 10, z: 29 });
  })
);
engine.addEntity(teleport);

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
