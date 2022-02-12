<template>
  <v-container>
    <v-card>
      <v-toolbar
        dark
        flat
      >
        <v-text-field
          append-icon="mdi-microphone"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
        />

        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
            centered
          >
            <v-tab>
              서울
            </v-tab>
            <v-tab>
              강원도
            </v-tab>
            <v-tab>
              경기도
            </v-tab>
            <v-tab>
              충청도
            </v-tab>
            <v-tab>
              전라도
            </v-tab>
            <v-tab>
              경상도
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <!-- 서울 -->
      <v-tabs-items v-model="tabs">
        <v-tab-item>
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
                      src="@/assets/About/Seoul/4.jpg"
                    />
                    <v-card-title> 노원우주학교 </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 노원구 등나무 1길 7(중계동 507-1)
                        <br>
                        우편번호: 
                      </div>
                      <br>
                      <div>전화번호: 02-971-6232</div>
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
                      src="@/assets/About/Seoul/5.jpg"
                    />
                    <v-card-title> 국립서울과학관 </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 종로구 와룡동 2번지
                        <br>
                        우편번호: 110-360
                      </div>
                      <br>
                      <div>전화번호: 02-3668-2200</div>
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
                    <v-card-title> 광진청소년수련관 </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        주소: 서울특별시 광진구 광장동 313-3번지
                        <br>
                        우편번호: 
                      </div>
                      <br>
                      <div>전화번호: 02-2204-3100</div>
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
                    <v-card-title> 서울과학전시관 천문대 </v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      />
                      <br>
                      <div class="my-4 text-subtitle-1">
                        우편번호:	100-873 <br>
                        주소: 서울특별시 관악구 낙성대동 238번지
                      </div>
                      <br>
                      <div>전화번호: 02-881-3128</div>
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
        <!-- --------------------------------------------------------------------강원도--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          <div>
            <br>
            <div class="Gangwon">
              강원
              <br>
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
                      <v-card-title> 화천청소년수련관 (광덕산그린천문대) </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 강원도 화천군 화천읍 아리 239 화천군청
                          <br> 우편번호: 209-804
                        </div>
                        <br>
                        <div>전화번호: 033-442-1211</div>
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
                        src="@/assets/About/Gangwon/2.jpg"
                      />
                      <v-card-title> 횡성우리별천문대 </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 	강원도 횡성군 공근면 상창봉리 264-4 <br>
                          우편번호: 
                        </div>
                        <br>
                        <div>전화번호: 	033-345-8471</div>
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
                        src="@/assets/About/Gangwon/3.jpg"
                      />
                      <v-card-title> 양구국토정중앙천문대 </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 강원도 양구군 남면 도촌리 96-5
                          <br>
                          우편번호: 
                        </div>
                        <br>
                        <div>전화번호: 033-480-2586</div>
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
                      <v-card-title> 평창청소년수련원(은하수천문대) </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 강원도 평창군 용평면 백옥포리 산154-1
                          <br>
                          우편번호: 
                        </div>
                        <br>
                        <div>전화번호: 	033-330-0800</div>
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
                        src="@/assets/About/Gangwon/5.jpg"
                      />
                      <v-card-title> 횡성천문인마을 </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 강원도 횡성군 강림면 월현리 352-2
                          <br>
                          우편번호: 110-360
                        </div>
                        <br>
                        <div>전화번호: 033-342-9023</div>
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
                      <v-card-title> 영월별마로천문대 </v-card-title>

                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        />
                        <br>
                        <div class="my-4 text-subtitle-1">
                          주소: 강원도 영월군 영월읍 영흥리 산 59
                          <br>
                          우편번호: 
                        </div>
                        <br>
                        <div>전화번호: 	033-374-7460</div>
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
          </div>
        </v-tab-item>
        <!-- --------------------------------------------------------------------경기도--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          미구현
        </v-tab-item>
        <!-- --------------------------------------------------------------------충청도--------------------------------------------------------------------------------------- -->
        <v-tab-item>
          미구현
        </v-tab-item>
        <!-- --------------------------------------------------------------------전라도--------------------------------------------------------------------------------------- -->      
        <v-tab-item>
          미구현
        </v-tab-item>
        <!-- --------------------------------------------------------------------경상도--------------------------------------------------------------------------------------- -->      
        <v-tab-item>
          미구현
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
div.Seoul{
  font-size: 40px;
  font-weight: bold;
}
div.Gangwon{
  font-size: 40px;
  font-weight: bold;
}
div.v-card-title{
  text-align: center;
  
}
div.v-card{
  text-align: center;
}
</style>