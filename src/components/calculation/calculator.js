//Vue allows us now to import hooks and anyother stuff that we need to use for our template
import {computed, onMounted, ref} from "@vue/composition-api";

export default {
    //this new method creates all that we need to use and its return will be accessible to the vue template.
    setup() {
        let number1 = ref(0);
        let number2 = ref(0);
        let operation = ref('+');
        let options = ref([]);

        const results = computed(() => {

            if (operation.value === '+') {
                return parseInt(number1.value) + parseInt(number2.value);
            } else if (operation.value === '-') {
                return parseInt(number1.value) - parseInt(number2.value);
            } else if (operation.value === '/') {
                return parseInt(number1.value) / parseInt(number2.value);
            } else if (operation.value === '*') {
                return parseInt(number1.value) * parseInt(number2.value);
            } else if (operation.value === '%') {
                return parseInt(number1.value) % parseInt(number2.value);
            } else {
                return parseInt(number1.value)+parseInt(number2.value);
            }

        })

        onMounted(() => {
            number1.value = 5;
            number2.value = 10;
            options.value = ['+', '-', '/', '%', '*']
        })

        // Anything returned from here will be accessible by the template
        return {
            number1,
            number2,
            operation,
            options,
            results
        }
    }
}