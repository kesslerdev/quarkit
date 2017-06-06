import { EventEmitter } from 'events'

export class Extendable implements IExtendable{
  [x: string]: any;

  Events:EventEmitter

  constructor(){

    this.Events = new EventEmitter(); 
    this.Constructors.map(fn => {
      fn(this)
    })
    this.Events.emit('constructors:after')
  }

  get Extensions() : string[] {
    return this.__mixins || (this.__mixins = new Array<string>())
  }

  get Constructors() : Function[] {
    return this.__constructors || (this.__constructors = new Array<Function>())
  }
}


export interface IExtendable{
  Extensions : string[]
  Constructors : Function[]
  Events:EventEmitter
}