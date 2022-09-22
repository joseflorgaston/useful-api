
module.exports = {
    async getTermsAndConditions(req, res) {
        const basesYCondiciones = {
            DES_LARGA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui libero, euismod vel ultrices et, posuere id massa. Donec aliquam nisl sit amet volutpat porttitor. Maecenas lobortis, sem eu suscipit sodales, magna ex congue urna, pulvinar blandit purus augue blandit elit. Phasellus placerat arcu ut dapibus lacinia. Suspendisse convallis suscipit vestibulum. Phasellus iaculis, ex sed semper rhoncus, nulla dui porttitor leo, non pulvinar justo lorem eget est. Suspendisse rutrum id ante id accumsan. Praesent ullamcorper pellentesque sapien sit amet ultrices. Aliquam et urna sit amet lacus elementum pharetra. Ut nibh enim, eleifend vitae mi quis, egestas lacinia lacus" +
                "\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Aenean quis vehicula risus, sit amet gravida justo. Donec porttitor ac enim non volutpat. Nulla sed ipsum quam. Proin condimentum iaculis leo, quis pretium elit vulputate at. Vestibulum ultricies elementum sapien. Donec at ligula faucibus, malesuada augue vel, congue metus." +
                "\nFusce aliquam faucibus arcu, a porttitor lectus rhoncus tincidunt. Nunc maximus ex sed quam varius, et posuere elit tincidunt. Vivamus felis risus, congue sed facilisis ut, ultrices id ligula. Aliquam at consectetur tellus. Fusce lobortis sollicitudin dapibus. Aliquam feugiat odio eu felis posuere, eget luctus nisi bibendum. Nulla vel bibendum metus. Donec sollicitudin eget quam et fermentum." +
                "\nAliquam id sagittis dolor, non facilisis sem. Donec luctus tincidunt tristique. Nunc at mattis neque. Nam ut interdum ligula. Vestibulum egestas, mauris scelerisque commodo consectetur, sapien neque ultrices felis, sed lacinia metus nisi non nibh. Sed bibendum sapien at pharetra ultricies. Sed vitae neque est. Fusce viverra nisi neque, vestibulum eleifend magna tincidunt ac. Sed sodales mauris ac eros pharetra, ac eleifend sapien tincidunt. Duis eget egestas mauris, non semper lectus." +
                "\nVestibulum eu turpis ac mi maximus dignissim nec ut ex. In tincidunt est a diam aliquet, a mollis sem vehicula. Curabitur finibus, justo vitae facilisis mollis, nisl purus dignissim purus, eget elementum nunc nisi sagittis neque. Proin vel neque congue, fringilla tellus non, rutrum justo. Integer facilisis, turpis cursus sagittis bibendum, arcu felis commodo nisi, at elementum est nunc eget leo. Vivamus elit dolor, varius in ligula volutpat, venenatis lacinia ligula. Donec interdum augue in mauris rhoncus pharetra. Phasellus nec massa scelerisque, tristique purus at, feugiat libero. Sed viverra scelerisque felis quis dapibus. Maecenas nec arcu mollis, cursus felis eget, condimentum nisl.",
            DES_CORTA: "Estas son las bases y condiciones mas perturbadoras del mundo",
        };
        await new Promise(resolve => setTimeout(resolve, 2000));
        res.status(200).json(basesYCondiciones);
    },
    async get403StatusCode(req, res) {
        res.status(403).json("Forbidden");
    },
    async get401StatusCode(req, res) {
        res.status(401).json("Unauthorized");
    },
    async get400StatusCode(req, res) {
        res.status(400).json("Bad Request");
    },
    async get500StatusCode(req, res) {
        res.status(500).json("Internal Server Error");
    }
}