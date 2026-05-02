const johnathonroute = (req, res) => {
    res.send('Johnathon Staples');
};

const angelaroute = (req, res) => {
    res.send('Angela Staples');
};

const rebekahroute = (req, res) => {
    res.send('Rebekah Staples');
};

module.exports = {
    johnathonroute,
    angelaroute,
    rebekahroute
};