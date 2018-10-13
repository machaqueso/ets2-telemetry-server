Funbit.Ets.Telemetry.Dashboard.prototype.initialize = function (skinConfig, utils) {
}

Funbit.Ets.Telemetry.Dashboard.prototype.filter = function (data, utils) {

    var wearSumPercent = data.truck.wearEngine * 100 +
        data.truck.wearTransmission * 100 +
        data.truck.wearCabin * 100 +
        data.truck.wearChassis * 100 +
        data.truck.wearWheels * 100;
    wearSumPercent = Math.min(wearSumPercent, 100);
    data.truck.wear = Math.round(wearSumPercent) + '%';
    data.trailer.wear = Math.round(data.trailer.wear * 100) + '%';

    data.trailer.cargo = Math.round(data.trailer.mass/1000) + 't ' + data.trailer.name;

    var etaTime = new Date(data.navigation.estimatedTime);
    data.navigation.etaTime = etaTime.toLocaleTimeString();
    data.navigation.etaDistance = Math.round(data.navigation.estimatedDistance/1000) + 'km'

    return data;
};

Funbit.Ets.Telemetry.Dashboard.prototype.render = function (data, utils) {
}