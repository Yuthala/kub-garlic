
<template>
	<div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h2>Связаться с нами</h2>
      
      <div class="mb-3 form-control" :class="{invalid: errors.name}">
        <label for="name" class="form-label">Ваше имя</label>
        <input 
			type="text" 	
			id="name" 
			placeholder="Введите имя"
			v-model.trim="name"
			class="form-control"
          >
          <small v-if="errors.name">{{ errors.name }}</small>
      </div>

		<div class="mb-3">
			<label for="email" class="form-label">Адрес электронной почты</label>
			<input 
			type="email" 
			id="email" 
			placeholder="example@email.com"
			v-model.trim="email"
			class="form-control"
			>
		</div>

      <div class="mb-3">
        <label for="city" class="form-label">Ваш регион</label>
        <select id="city" v-model="city" class="form-select form-select-sm mb-3" aria-label="выбор региона">
			<option value="center">Центральный</option>
			<option value="north">Северный</option>
			<option value="prv">Приволжский</option>
			<option value="sth">Южный</option>
			<option value="url">Уральский</option>
			<option value="sib">Сибирский</option>
			<option value="dv">Дальневосточный</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Интересующий продукт</span>
        <div class="checkbox">
          <label class="form-label"><input type="checkbox" name="category" v-model="category" value="garlic"/>чеснок</label>
        </div>
        <div class="checkbox">
          <label class="form-label"><input type="checkbox" name="category" v-model="category" value="onion"/>лук</label>
        </div>
        <div class="checkbox">
          <label class="form-label"><input type="checkbox" name="category" v-model="category" value="shalot"/>шалот</label>
        </div>
      </div>

		<div class="form-control">
			<label class="form-label">Введите ваш вопрос</label>
			<textarea class="form-control" v-model="textarea" rows="3" maxlength="250" placeholder="максимум 250 знаков"></textarea>
		</div>

      <div class="form-checkbox">
        <div class="checkbox">
          <label class="form-label"><input type="checkbox" v-model="agree"/>Согласен с политикой <a href="" target="_blank" rel="noopener">конфиденциальности</a></label>
        </div>
      </div>

      <app-button type="submit" class="btn primary" text="Отправить"></app-button>
    </form>
	</div>
</template>
  
<script>
import AppButton from './AppButton'
  export default {
    data() {
      return {
        name: '',
		email: '',
        city: 'center',
        category: [],
        agree: false, 
		textarea: '',
        errors: {
          name: null
        }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true //isValid изначально true
        if (this.name.length === 0) { //если длина name = 0
          this.errors.name = 'Имя не может быть пустым'
          isValid = false//меняем isValid на false
        } else {
          this.errors.name = null//ставим стандартные стили, если введено имя
        }
        return isValid //возвращаем isValid
      },
      submitHandler() {
        if (this.formIsValid() ) { //отправляем форму, если formIsValid = true
			console.log('Name:', this.name)
			console.log('Email', this.email)
			console.log('Region:', this.city)
			console.log('Category:', this.category)
			console.log('Question:', this.textarea)
			console.log('Agree:', this.agree)
        }
      }
    },
	components: {AppButton}
  }
</script>
  
<style>
  .form-control small {
    color: #e53935;
  }

  .form-control.invalid input {
    border-color:  #e53935;
  }
</style>