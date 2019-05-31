<template>
    <div class="q-pa-sm">
        <div
            v-if="!isInEditModus"
            class="text-h5 full-height display-name"
        >
            {{getDisplayName}}
            <q-btn flat icon="edit" @click="openEditModus" />
        </div>
        <div 
            v-if="isInEditModus"
            class="row"
        >
            <div class="col-xs-10">
                <q-input
                    label="Display Name"
                    v-model="newDisplayName"
                    dark
                />
            </div>
            <div class="col-xs-1">
                <q-btn flat icon="check" @click="tryChangeDisplayName" />
            </div>
            <div class="col-xs-1">
                <q-btn flat icon="close" @click="closeEditModus" />
            </div>
        </div>
    </div>
</template>
<script src="./DisplayName.component.js"></script>
<style lang="styl" scoped>
.display-name {
    line-height: 56px;
}
</style>