<script setup>
import {useForm, usePage} from "@inertiajs/vue3";
import Checkbox from "@/Components/Checkbox.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import {computed} from "vue";


const page = usePage();
const strings = computed(() => page.props.strings);

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: true,
});

form.name = strings.no_name;

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};
</script>
<template>
  <form @submit.prevent="submit" class="w-full">
    <input type="hidden" v-model="form.name" name="name" />
    <input type="hidden" v-model="form.terms" name="terms" />
    <div class="flex flex-col gap-4 w-full">
      <div>
        <label for="email">{{ strings.email }}</label>
        <input id="email"
               type="email"
               class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm
                                           ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                           focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               v-model="form.email">
        <InputError class="mt-2" :message="form.errors.email"/>
      </div>
      <div>
        <label for="password">{{ strings.password }}</label>
        <div class="relative">
          <input type="password"
                 id="password"
                 class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm
                                           ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                           focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 v-model="form.password">
          <InputError class="mt-2" :message="form.errors.password"/>
        </div>
      </div>
      <div>
        <label for="confirm_password">{{ strings.confirm_password }}</label>
        <div class="relative">
          <input type="password"
                 id="confirm_password"
                 class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm
                                           ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                           focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 v-model="form.password_confirmation">
          <InputError class="mt-2" :message="form.errors.password_confirmation"/>
        </div>
      </div>
      <button type="submit"
              class="w-full justify-center rounded-md bg-st-patricks-blue px-3 py-2 my-3
                                            text-sm font-semibold leading-6 text-white shadow-sm hover:bg-st-patricks-blue-500
                                            focus-visible:outline focus-visible:outline-2
                                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {{ strings.create_admin_user }}
      </button>
    </div>
  </form>
</template>
