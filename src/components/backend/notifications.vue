<template>
    <div class="wrapper">
        <div class="content">
            <div class="row">
                <div id="notifications" class="col-sm-4">
                    <div v-for="notification in notifications" :class="getNotificationClass(notification)">
                        {{ notification.message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'backend-notifications',
        data() {
            return {}
        },
        methods: {
            getNotificationClass: function(notification) {
                return 'alert alert-' + notification.type;
            }
        },
        props: ['notifications']
    }
</script>

<style>
    #notifications {
        margin: 10px 0;
        text-align: center;
        font-weight: bold;
    }
</style>
