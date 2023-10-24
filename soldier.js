const soldier = {
    name: 'John',
    health: 10,
    weapon: {
        name: 'M16',
        bullets: 30
    },
    ammo: 3,
    fire: function () {
        if (this.weapon.bullets) {
            console.log('бах-бах')
            this.weapon.bullets--
        } else {
            console.log('обойма пуста. Перезарядитесь')
        }

    },
    reload: function () {
        if (this.ammo) {
            console.log('перезарядка...')
            this.weapon.bullets = 30
            this.ammo--
        } else {
            console.log('не осталось припасов')
        }
    },
    hurt: function () {
        this.health ? this.health-- : console.log('Ты проиграл')
    },
}