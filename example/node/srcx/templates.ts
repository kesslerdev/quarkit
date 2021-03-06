import { MongoGameObject } from './lib/MongoGameObject'
// Imports
import { IGameObject, GameObject, GameObjectMixin } from 'quarkit-core'

import { 
    IProduction, Production,
    Resource, IResource, ResourceBag, IResourceBag,
    IStateful, Stateful, IStateProvider, StateProvider, StateGameObject,
    IExpressionContainer, ExpressionContainer,
    ICost, Cost,
    IPossessor, Possessor,
    IPurchasable, Purchasable,
    
} from 'quarkit-modules'

import { IExtendable, ExtendableMixin } from 'quarkit-mixin'


// Type declaration
@Resource
class ResourceTemplate extends MongoGameObject{
  [x: string]: any
}

// First declare Feature mixin
@Production @Purchasable @Cost
// Then declare behaviors mixins 
@Stateful @ExpressionContainer
class ShopTemplate extends StateGameObject{
  registerEvents() {
    // super()
    this.Events.on(
        'set:stateprovider', 
        stateProvider => this.Events.emit('context:provide','Player', stateProvider))
  }
}

@Possessor
@ResourceBag
@StateProvider
class Capitalist extends MongoGameObject{
  [x: string]: any
}

// FIX
// little Fix show => https://github.com/Microsoft/TypeScript/issues/4881#issuecomment-187903272
interface ResourceTemplate extends IResource {}
interface ShopTemplate extends IStateful, IProduction, IExpressionContainer, ICost, IPurchasable {}
interface Capitalist extends IStateProvider, IResourceBag, IPossessor {}


// Export GameObjects (Each can be a collection)
export { ResourceTemplate, ShopTemplate, Capitalist }
