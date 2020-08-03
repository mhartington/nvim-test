import { Plugin, Command } from '@neovim/decorators';
import {Neovim} from 'neovim';

@Plugin
class MyClass {
  constructor(public nvim: Neovim) { }


  @Command('MyTest')
  async myTestCmd(){
    await this.nvim.outWrite('hello \n');
  }
}