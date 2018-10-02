<template>
    <div class="wrapper">
        <div class="content">
            <b-row>
                <div id="notifications">
                    <div v-for="notification in notifications" :class="getNotificationClass(notification)" :key="notification.id">
                        {{ notification.message }}
                    </div>
                </div>
            </b-row>
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
  .wrapper {
    background: #FFF;
  }
    #notifications {
        margin: 10px 0;
        text-align: center;
        font-weight: bold;
    }
</style>
