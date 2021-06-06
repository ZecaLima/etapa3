import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class CriarcontaPageForm{

    private  formBuilder: FormBuilder;

    constructor( formBuilder: FormBuilder){
        this.formBuilder = formBuilder;

    }

    //Formulário com requerimentos, ou seja obrifa o utilizador inserir alguns campos
    createForm(): FormGroup{
        return this.formBuilder.group({
            nome:['', [Validators.required]],
            apelido:['', [Validators.required]],
            email:['', [Validators.required,Validators.email]], //propriedade array vazio, vai ser o valor inicial, required obrigatorio
            password:['', [Validators.required]] //validador obrigatorio
        });
    }
}
