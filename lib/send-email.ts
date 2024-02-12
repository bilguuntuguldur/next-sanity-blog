import { FormData } from '@/components/contact/contact-form';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/hello';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
        alert(response.message);
        })
        .catch((err) => {
        alert(err);
        });
}