import { getNotificationById } from '@/api/notificationRepo';

export default (await import('vue')).defineComponent({
name: 'MainView',
components: {},
data() {
return {
notification: {
id: null,
details: null,
birthdayDate: null
}
};
},
methods: {
sendRequest() {
this.notification = getNotificationById(1);
},
renderRow(_notification) {
notification ? id ? _notification : ''
:
            ;
},
}
});
