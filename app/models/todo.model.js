module.exports = mongoose => {
    return mongoose.model(
        'todo',
        mongoose.Schema(
            {userid: String,
             task: String
            }, { timestamps: true}
        )
    )
}