import * as Pont from 'pont-engine'

export class FileStructures extends Pont.FileStructures {
  public getOriginFileStructures(
    generator: Pont.CodeGenerator,
    usingMultipleOrigins = false
  ) {
    generator.getBaseClassesInDeclaration = this.getBaseClassesInDeclaration.bind(
      this,
      generator.getBaseClassesInDeclaration(),
      usingMultipleOrigins
    )
    generator.getModsDeclaration = this.getModsDeclaration.bind(
      this,
      generator.getModsDeclaration(),
      usingMultipleOrigins
    )

    const result = {
      'baseClass.ts': generator.getBaseClassesIndex.bind(generator),
      'index.ts': generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator),
      'mods': {}
    }

    if (!usingMultipleOrigins) {
      result['api-lock.json'] = this.getLockContent.bind(this)
    }

    return result
  }
}

export default class MyGenerator extends Pont.CodeGenerator {}
