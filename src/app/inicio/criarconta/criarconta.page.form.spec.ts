
import { FormBuilder, FormGroup } from '@angular/forms';
import{ CriarcontaPageForm} from './criarconta.page.form';

describe (' CriarcontaPageForm',()=>{

    let  criarcontaPageForm:  CriarcontaPageForm;
    let form: FormGroup;


    beforeEach(()=>{ //caso não seja um email mm, vai ser executada antes de cada teste
        criarcontaPageForm= new  CriarcontaPageForm(new FormBuilder());
       form =  criarcontaPageForm.createForm();

    });

    it('should create count form empty', ()=> {
        expect(form).not.toBeNull();
        expect(form.get('nome')).not.toBeNull();
        expect(form.get('nome').value).toEqual('');
        expect(form.get('nome').valid).toBeFalsy();
        expect(form.get('apelido')).not.toBeNull();
        expect(form.get('apelido').value).toEqual('');
        expect(form.get('apelido').valid).toBeFalsy();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual('');
        expect(form.get('email').valid).toBeFalsy(); //vai ter como valido o valor falso(inicialmente o email vai falso)
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual('');
        expect(form.get('password').valid).toBeFalsy();

    });

    it('should gave email invalid if email is not invalid', ()=>{
        form.get('email').setValue('Email invalido');

        expect(form.get('email').valid).toBeFalsy();
    });
    it('should have valid if email is valid',()=> {
        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();

    });
    it('should have a valid form', () => {
        form.get('nome').setValue('anyNome');
        form.get('apelido').setValue('anyApelido');
        form.get('email').setValue('valid@email.com');
         form.get('password').setValue('anyPassword');

         expect(form.valid).toBeTruthy();
    });
});
