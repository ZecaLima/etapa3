import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class LoginPageForm{

    private  formBuilder: FormBuilder;

    constructor( formBuilder: FormBuilder){
        this.formBuilder = formBuilder;

    }
    createForm(): FormGroup{
        return this.formBuilder.group({
            email:['', [Validators.required,Validators.email]], //propriedade array vazio, vai ser o valor inicial, required obrigatorio
            password:['', [Validators.required]] //validador obrigatorio
        });
    }
}
