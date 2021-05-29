
import { FormBuilder, FormGroup } from '@angular/forms';
import{LoginPageForm} from './login.page.form';

describe ('LoginPageForm',()=>{

    let loginPageForm: LoginPageForm;
    let form: FormGroup;


    beforeEach(()=>{ //caso não seja um email mm, vai ser executada antes de cada teste
      loginPageForm= new LoginPageForm(new FormBuilder());
       form = loginPageForm.createForm();

    });

    it('should create login form empty', ()=> {
        expect(form).not.toBeNull();
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
        form.get('email').setValue('valid@email.com');
         form.get('password').setValue('anyPassword');
         expect(form.valid).toBeTruthy();
    });
});
