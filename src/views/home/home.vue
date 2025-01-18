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
                <a-button class="free" type="primary" @click="gotoSign">Try it for FREE</a-button>
                <div class="row2">And get 25% OFF your subscription by contacting us down below</div>
            </div>
        </div>
        <div class="container">
            <div class="container-title">Plans & Pricing</div>
            <div class="stripe stripe-web">
                <div class="item">
                    <img class="icon" src="/src/assets/img/s1.png" alt="" />
                    <div class="info">
                        <div class="name">
                            5 day free trial
                            <span class="name-tip">then $45 per month</span>
                        </div>
                        <div class="content">
                            Perfect for solo practitioners, offering essential features like patient management, prebuilt TCM note templates, a
                            comprehensive TCM database, online profile listing, patient portal, and communication tools.
                        </div>
                        <a-button class="stripe-btn" @click="gotoSign">Try Solo</a-button>
                        <div class="hint">Hint: Send us a feature request to receive 25% OFF for your first month subscription.</div>
                    </div>
                </div>
                <div class="item" style="margin-top: 80px">
                    <img class="icon" src="/src/assets/img/s2.png" alt="" />
                    <div class="info">
                        <div class="name">
                            7 day free trial
                            <span class="name-tip">then $90 per month</span>
                        </div>
                        <div class="content">
                            Ideal for ambitious solo practitioners or clinics with multiple practitioners. Enjoy everything in Solo, plus advanced
                            features like flexible note templates, detailed reports, staff management, billing & sales, and more.
                        </div>
                        <a-button class="stripe-btn" @click="gotoSign">Try Growth</a-button>
                        <div class="hint">Hint: Send us a feature request to receive 25% OFF for your first 3 months subscription.</div>
                    </div>
                </div>
            </div>
            <div class="stripe stripe-mobile">
                <div class="item">
                    <img class="icon" src="/src/assets/img/s1.png" alt="" />
                    <div class="info">
                        <div class="name">5 day free trial</div>
                        <div class="name-tip">then $45 per month</div>
                        <a-button class="stripe-btn" @click="gotoSign">Try Solo</a-button>
                        <div class="content">
                            Perfect for solo practitioners, offering essential features like patient management, prebuilt TCM note templates, a
                            comprehensive TCM database, online profile listing, patient portal, and communication tools.
                        </div>
                        <div class="hint">Hint: Send us a feature request to receive 25% OFF for your first month subscription.</div>
                    </div>
                </div>
                <div class="item" style="margin-top: 80px">
                    <img class="icon" src="/src/assets/img/s2.png" alt="" />
                    <div class="info">
                        <div class="name">7 day free trial</div>
                        <div class="name-tip">then $90 per month</div>
                        <a-button class="stripe-btn" @click="gotoSign">Try Growth</a-button>
                        <div class="content">
                            Ideal for ambitious solo practitioners or clinics with multiple practitioners. Enjoy everything in Solo, plus advanced
                            features like flexible note templates, detailed reports, staff management, billing & sales, and more.
                        </div>
                        <div class="hint">Hint: Send us a feature request to receive 25% OFF for your first 3 months subscription.</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="container-title">Key features</div>
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
        <a-form ref="formRef" class="form" :model="formState" layout="vertical" :rules="rules">
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
    import { ref } from 'vue';
    import { message } from 'ant-design-vue';
    import axios from 'axios';

    let spinning = ref(false);
    // let email = ref('');
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

    const gotoSign = async () => {
        window.open('https://auth.aura-cure.com/en/signup', '_blank');
    };
    // const submitEmail = async () => {
    //     if (!email.value) {
    //         message.warning('Please input email');
    //         return;
    //     }
    //     let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     if (!emailRegex.test(email.value)) {
    //         message.warning('Please input correct email');
    //         return;
    //     }
    //     await axios({
    //         // url: `http://localhost:3000/api/portal-email`,
    //         url: `https://dashboard.aura-cure.com/api/portal-email`,
    //         method: 'POST',
    //         headers: {
    //             // Authorization: `Bearer ${authInfo.accessToken}`,
    //             'Content-type': 'application/json',
    //         },
    //         params: { email: email.value },
    //     });
    //     message.success('Thank you for your interest!');
    // };
    const onSubmit = () => {
        spinning.value = true;
        formRef.value
            .validate()
            .then(async () => {
                await axios({
                    // url: `http://localhost:3000/api/portal-email`,
                    url: `https://dashboard.aura-cure.com/api/portal-email`,
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
    .stripe-web,
    .stripe-mobile {
        display: none;
    }
    .ant-spin {
        position: fixed !important;
    }
    .nav {
        width: 100%;
        height: 122px;
        .content {
            display: flex;
            align-items: center;
            max-width: 1200px;
            height: 122px;
            margin: 0 auto;
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            height: 100%;
            margin: 0 auto;
            .free {
                width: 486px;
                height: 90px;
                margin: 40px 0;
                font-size: 36px;
                border-radius: 22px;
            }
            .row1 {
                font-size: 60px;
                font-weight: bold;
                color: #00796b;
                text-align: center;
            }
            .row2 {
                font-size: 16px;
                color: #00796b;
                text-align: center;
            }
        }
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
        .container-title {
            margin: 40px 0;
            font-size: 26px;
            color: #00796b;
        }
        .tip {
            font-size: 14px;
            color: $color-text-secondary;
        }
        .title {
            font-size: 14px;
            color: $color-text;
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
        .stripe {
            padding: 40px 60px;
            background-color: #00796b;
            border-radius: 19px;
            .item {
                display: flex;
                .icon {
                    width: 254px;
                    height: 254px;
                    margin-right: 40px;
                    border-radius: 19px;
                }
                .info {
                    color: #ffffff;
                    .name {
                        font-size: 36px;
                        .name-tip {
                            margin-left: 10px;
                            font-size: 24px;
                        }
                    }
                    .content {
                        margin-top: 10px;
                        font-size: 22px;
                        font-weight: 200;
                    }
                    .stripe-btn {
                        width: 163px;
                        margin: 30px 0 10px;
                        color: #00796b;
                    }
                    .hint {
                        font-size: 16px;
                        font-weight: 200;
                        color: #8bc34a;
                    }
                }
            }
        }
    }
    .form-title {
        max-width: 1200px;
        margin: 0 auto;
        font-size: 30px;
        font-weight: bold;
    }
    .form {
        max-width: 1200px;
        padding: 20px 30px;
        margin: 40px auto 0;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
    }
    .copy {
        padding: 60px 0;
        margin: 0 auto;
        font-size: 13px;
        color: rgb(60 60 67 / 60%);
        text-align: center;
    }

    @media screen and (width <= 451px) {
        .stripe-mobile {
            display: block;
        }
        .free {
            width: 80% !important;
            width: 216px !important;
            height: 49px !important;
            font-size: 22px !important;
            border-radius: 12px !important;
        }
        .nav {
            padding: 0 20px;
        }
        .slide {
            padding: 0 20px;
            .row1 {
                font-size: 28px !important;
            }
        }
        .container {
            padding: 0 20px;
            .stripe {
                padding: 30px;
                .item {
                    flex-direction: column;
                    width: 100%;
                    .icon {
                        width: 114px;
                        height: 114px;
                    }
                    .info {
                        margin-top: 20px;
                        .name {
                            font-size: 18px;
                        }
                        .name-tip {
                            margin-top: 10px;
                            font-size: 16px;
                        }
                        .content {
                            font-size: 16px;
                        }
                        .stripe-btn {
                            margin: 20px 0;
                        }
                        .hint {
                            margin-top: 10px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .form-title {
            padding: 0 20px;
            font-size: 24px;
        }
    }

    @media screen and (width > 451px) {
        .stripe-web {
            display: block;
        }
    }
</style>
