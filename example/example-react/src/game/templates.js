import { GameObjectMixin } from 'quarkit-core'
import { mix } from 'quarkit-mixin'
import {
  StateGameObjectMixin,
  ResourceMixin,
  ResourceBagMixin,
  ProductionMixin,
  PurchasableMixin,
  StateProviderMixin,
  PossessorMixin
} from 'quarkit-modules'


export class ResourceTemplate extends mix().with(GameObjectMixin, ResourceMixin) { }

export class ShopTemplate extends mix().with(StateGameObjectMixin, ProductionMixin, PurchasableMixin) { }

export class Capitalist extends mix().with(GameObjectMixin, StateProviderMixin, ResourceBagMixin, PossessorMixin) { }

