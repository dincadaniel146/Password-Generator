import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  passwordlength=0;
  letters=false;
  numbers=false;
  symbols=false;
  title='PasswordGenerator';
PasswordLengthFunction(value:string){
const parsedValue=parseInt(value);
if (!isNaN(parsedValue))
{
  this.passwordlength=parsedValue;
}
  }
IncludeLetters(){
  this.letters= !this.letters;

  }
IncludeSymbols(){
  this.symbols= !this.symbols;
}
IncludeNumbers(){
  this.numbers= !this.numbers;
}

  onButtonClick(){
    const numbersPass='1234567890'
    const lettersPass='qwertyuiopasdfghjklzxcvbnm'
    const symbolsPass='!@#$%^&*()_-+=[]{}'

    let validChars=''
    if(this.letters)
    {
      validChars+=lettersPass;
    }
    if(this.numbers)
    {
      validChars+=numbersPass;
    }
    if(this.symbols){
      validChars+=symbolsPass;
    }
    let generatedPassword='';
    for ( let i=0;i <this.passwordlength;i++)
    {
      const index=Math.floor(Math.random() * validChars.length);
generatedPassword += validChars[index];
    }
    this.password=generatedPassword;
}
}
