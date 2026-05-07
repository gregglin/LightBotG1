module.exports = async function (context, req) {
    const data = req.body;

    context.log("Lightbot event received:", data);

    context.res = {
        status: 200,
        body: { message: "Logged successfully" }
    };
};