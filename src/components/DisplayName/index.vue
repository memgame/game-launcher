<template>
    <div class="display-name-container">
        <div v-if="!isInEditModus">
            <div class="text-h5">
                {{getDisplayName}}
                <q-btn flat icon="edit" @click="openEditModus" />
            </div>
        </div>
        <div v-if="isInEditModus">
            <div class="row">
                <div class="col-xs-10">
                    <q-input
                        label="Display Name"
                        v-model="newDisplayName"
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
    </div>
</template>
<script src="./DisplayName.component.js"></script>
<style lang="styl" scoped>
.display-name-container {
    height: 56px;
}
</style>