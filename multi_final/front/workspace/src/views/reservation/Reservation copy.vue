<template>
  <v-container>
    <v-card>
      <v-toolbar
        dark
      >
        <template>
          <v-tabs
            v-model="tabs"
            centered
          >
            <v-tab>
              예약
            </v-tab>
            <v-tab>
              자주 묻는 질문
            </v-tab>
            <v-tab>
              1:1 문의
            </v-tab>
            <v-tab>
              공지사항
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-row
            align="center"
            justify="space-around"
          >
            <v-spacer />
            <v-btn
              class="ma-10"
              tile
            >
              <v-icon left>
                mdi-pencil
              </v-icon>
              예약 신청
            </v-btn>
          </v-row>

          
          <br>
          <div class="Seoul">
            서울
            <div>
              <v-row>
                <v-col
                  cols="6"
                  sm="4"
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                  >
                    <v-img
                      height="250"
                      src=""
                    />
                    <v-card-title> 테코천문대 </v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 은평구 불광동 189-42
                        <br> 우편번호: 410-570 
                      </div>
                      <br>
                      <div>전화번호: 02-353-0791</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer>
                        <v-btn
                          color="deep-purple lighten-2"
                          text
                          href="Reservation"
                        >
                          Reserve
                        </v-btn>
                      </v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <v-col
                  cols="6"
                  sm="4"
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                  >
                    <v-img
                      height="250"
                      src=""
                    />
                    <v-card-title> 한국우주전파관측망 연세대학교천문대 </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 서대문구 신촌동 134 <br>
                        우편번호: 120-749 
                      </div>
                      <br>
                      <div>전화번호: 02-2123-3439</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer>
                        <v-btn
                          color="deep-purple lighten-2"
                          text
                          href="Reservation"
                        >
                          Reserve
                        </v-btn>
                      </v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <v-col
                  cols="6"
                  sm="4"
                >
                  <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                  >
                    <v-img
                      height="250"
                      src=""
                    />
                    <v-card-title> 창동청소년문화의집(옥상천문대) </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 도봉구 창동 462-2
                        <br>
                        우편번호: 
                      </div>
                      <br>
                      <div>전화번호: 02-908-0924</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer>
                        <v-btn
                          color="deep-purple lighten-2"
                          text
                          href="Reservation"
                        >
                          Reserve
                        </v-btn>
                      </v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-tab-item>
        <!-- --------------------------------------------------------------------자주 묻는 질문--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          자주 묻는 질문 내용
        </v-tab-item>
        <!-- --------------------------------------------------------------------1:1 문의--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          1:1문의 내용
        </v-tab-item>
        <!-- --------------------------------------------------------------------공지사항--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          공지사항 내용
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      tabs: null,
      text: '',
    }
  },
}

</script>

<style>

</style>