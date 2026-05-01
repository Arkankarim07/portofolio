export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export class MeshLineGeometry extends import("three").BufferGeometry {}
  export class MeshLineMaterial extends import("three").ShaderMaterial {}
}