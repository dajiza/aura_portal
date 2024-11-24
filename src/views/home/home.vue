<template>
    <a-spin :spinning="spinning" tip="Loading..." size="large">
        <div class="nav">
            <div class="content">
                <img class="logo1" src="/src/assets/img/logo1.png" alt="" />
                <img class="logo2" src="/src/assets/img/logo2.png" alt="" />
            </div>
        </div>
        <div class="slide">
            <div class="slide-inner">
                <div class="row1">EMR Software & Platform</div>
                <div class="row1">For Acupuncture/TCM Clinics</div>
                <div class="row2" style="margin-top: 20px">Join Our Waitlist for Early Access!</div>
                <div class="row2">Sign up today and enjoy an <span style="color: #8bc34a">exclusive 5-day free trial</span> when we launch</div>
                <div style="margin-top: 40px">
                    <a-input v-model:value="email" placeholder="Your Email" style="width: 250px" />
                    <a-button type="primary" style="margin-left: 20px" @click="submitEmail">Submit</a-button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="tip">TCM Focused EMR Features</div>
            <div class="title">Patient Management</div>
            <div class="img-wrap">
                <img src="/src/assets/img/e1.png" alt="" />
                <img src="/src/assets/img/e2.png" alt="" />
            </div>
            <div class="tip">TCM Focused EMR Features</div>
            <div class="title">
                Note Templates with Built-in TCM Examination, TCM Diagnosis, TCM Treatment Principles, Acupoints database, Herb Medicine database, and
                more.
            </div>
            <div class="img-wrap">
                <img src="/src/assets/img/e3.png" alt="" />
                <img src="/src/assets/img/e4.png" alt="" />
            </div>
            <div class="tip">A client-faced platform built for Acupuncturists and TCM Practitioners</div>
            <div class="title">
                Clinic profile, client reviews, service listing, product listing, and online booking. Clients can see past visits, leave reviews, and
                read messages from you.
            </div>
            <div class="img-wrap">
                <img src="/src/assets/img/e5.png" alt="" />
                <img src="/src/assets/img/e6.png" alt="" />
            </div>
        </div>
        <div class="form-title">Interested? Have a feature request? Reach out to us.</div>
        <a-form class="form" :model="formState" layout="vertical" :rules="rules" ref="formRef">
            <a-form-item label="Your Name" name="name">
                <a-input v-model:value="formState.name" placeholder="Your Name" />
            </a-form-item>
            <a-form-item label="Clinic Name">
                <a-input v-model:value="formState.clinic_name" placeholder="Email" />
            </a-form-item>
            <a-form-item label="Email" name="email">
                <a-input v-model:value="formState.email" placeholder="Email" />
            </a-form-item>
            <a-form-item label="Message" name="message">
                <a-input v-model:value="formState.message" placeholder="Message" />
            </a-form-item>
            <a-button type="primary" style="width: 100%" @click="onSubmit">Submit</a-button>
        </a-form>
        <div class="copy">Aura Cure Platform Inc. 2024 All Rights Reserved</div>
    </a-spin>
</template>
<script setup>
    import { computed, onMounted, ref, toRaw, defineProps, watch } from 'vue';
    import { message } from 'ant-design-vue';
    import axios from 'axios';

    let spinning = ref(false);
    let email = ref('');
    let formState = ref({
        name: '',
        clinic_name: '',
        email: '',
        message: '',
    });
    const rules = {
        name: [
            { required: true, message: 'Please input name', trigger: 'change' },
            { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'blur' },
        ],
        email: [
            { required: true, message: 'Please input email', trigger: 'change' },
            { type: 'email', message: 'Please input correct email', trigger: 'blur' },
        ],
        message: [{ required: true, message: 'Please input message', trigger: 'change' }],
    };
    const formRef = ref();

    const submitEmail = async () => {
        if (!email.value) {
            message.warning('Please input email');
            return;
        }
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email.value)) {
            message.warning('Please input correct email');
            return;
        }
        const response = await axios({
            url: `http://localhost:3000/api/portal-email`,
            // url: `${import.meta.env.VITE_APP_API_URL}/api/create-user`,
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${authInfo.accessToken}`,
                'Content-type': 'application/json',
            },
            params: { email: email.value },
        });
        message.success('Thank you for your interest!');
    };
    const onSubmit = () => {
        spinning.value = true;
        formRef.value
            .validate()
            .then(async () => {
                const response = await axios({
                    url: `http://localhost:3000/api/portal-email`,
                    // url: `${import.meta.env.VITE_APP_API_URL}/api/create-user`,
                    method: 'POST',
                    headers: {
                        // Authorization: `Bearer ${authInfo.accessToken}`,
                        'Content-type': 'application/json',
                    },
                    params: formState.value,
                });
                // await supabase.from('patients').upsert(formState.value);
                message.success('Thank you for your interest!');
                spinning.value = false;
            })
            .catch((error) => {
                console.log('🚀 ~ onSubmit ~ error:', error);
                message.warning('Please complete the data');
                spinning.value = false;
            });
    };
</script>
<style lang="scss">
    .ant-spin {
        position: fixed !important;
    }
    .nav {
        width: 100%;
        height: 122px;
        .content {
            display: flex;
            align-items: center;
            margin: 0 auto;
            max-width: 1200px;
            height: 122px;
            .logo1 {
                width: 66px;
            }
            .logo2 {
                width: 226px;
            }
        }
    }
    .slide {
        width: 100%;
        height: 670px;
        background: url('/src/assets/img/bg.jpg') no-repeat top center;
        background-size: cover;
        .slide-inner {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            max-width: 1200px;
            height: 100%;
            .row1 {
                color: #00796b;
                word-break: break-all;
                font-weight: bold;
                font-size: 60px;
            }
            .row2 {
                color: #00796b;
                font-weight: 500;
                font-size: 20px;
            }
        }
    }
    .container {
        margin: 0 auto;
        margin-top: 40px;
        max-width: 1200px;

        .tip {
            color: $color-text-secondary;
            font-size: 14px;
        }
        .title {
            color: $color-text;
            font-size: 14px;
        }
        .img-wrap {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            margin-bottom: 80px;
            img {
                max-width: 45%;
            }
        }
    }
    .form-title {
        margin: 0 auto;
        max-width: 1200px;
        font-weight: bold;
        font-size: 30px;
    }
    .form {
        margin: 40px auto 0;
        padding: 20px 30px;
        max-width: 1200px;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
    }
    .copy {
        margin: 0 auto;
        padding: 60px 0;
        color: rgba(60, 60, 67, 0.6);
        text-align: center;
        font-size: 13px;
    }
</style>
